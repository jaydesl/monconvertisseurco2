import React, { useState, useEffect, useContext, useMemo } from 'react'
import styled from 'styled-components'

import Fuse from '../../../node_modules/fuse.js/dist/fuse.basic.esm.min.js'
import { formatName, formatTotal } from 'utils/formatters'
import DataContext from 'components/providers/DataProvider'
import Section from 'components/base/Section'
import Top from 'components/misc/category/Top'
import Description from 'components/misc/category/Description'
import Instruction from 'components/misc/category/Instruction'
import Bottom from 'components/misc/category/Bottom'
import Wrapper from './saisons/Wrapper'
import Search from './saisons/Search'
import List from './saisons/List'

const StyledTop = styled(Top)`
  align-items: center;
  margin-bottom: 0.75rem;

  p {
    margin: 0;
  }
`
export default function Distance(props) {
  const { equivalents, categories } = useContext(DataContext)

  const [sorting, setSorting] = useState('alph_desc')

  const [search, setSearch] = useState('')

  const [results, setResults] = useState([])
  const [fuse, setFuse] = useState(null)
  useEffect(() => {
    if (equivalents) {
      setFuse(
        new Fuse(equivalents, {
          keys: [
            {
              name: 'name',
              weight: 1,
            },
            {
              name: 'slug',
              weight: 0.7,
            },
            {
              name: 'subtitle',
              weight: 0.4,
            },
          ],
          threshold: 0.3,
          ignoreLocation: false,
        })
      )
    }
  }, [equivalents])

  useEffect(() => {
    if (fuse && search.length > 0) {
      setResults(
        fuse.search(search.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      )
    } else {
      setResults(null)
    }
  }, [search, fuse])

  const equivalentsOfTheMonth = useMemo(
    () =>
      props.category &&
      equivalents
        .filter((equivalent) => equivalent.category === props.category.id)
        .filter(
          (equivalent) =>
            results || equivalent.months.includes(props.month.index)
        )
        .filter(
          (equivalent) =>
            !results ||
            results.find((result) => result.item.slug === equivalent.slug)
        )
        .map((equivalent) => ({
          id: `${equivalent.slug}`,
          title: formatName(equivalent.name, 1, true),
          emoji: equivalent.emoji,
          value: formatTotal(equivalent),
          season: equivalent.months.includes(props.month.index),
          months: equivalent.months,
          to: `/empreinte-carbone/${
            categories.find((category) => category.id === equivalent.category)
              .slug
          }/${equivalent.slug}`,
          onClick: () =>
            window?._paq?.push([
              'trackEvent',
              'Interaction',
              'Navigation via graph categorie',
              equivalent.slug,
            ]),
        }))
        .sort((a, b) =>
          sorting.includes('alph')
            ? a.id > b.id
              ? sorting.includes('desc')
                ? 1
                : -1
              : sorting.includes('desc')
              ? -1
              : 1
            : a.value > b.value
            ? sorting.includes('desc')
              ? -1
              : 1
            : sorting.includes('desc')
            ? 1
            : -1
        ),
    [equivalents, categories, props.category, props.month, results, sorting]
  )

  return (
    <Section>
      <Section.Content>
        <Wrapper month={props.month} slug={props.category.slug}>
          <Description description={props.category.description} />
          <StyledTop>
            <Instruction />
            <Search
              month={props.month}
              search={search}
              setSearch={setSearch}
              sorting={sorting}
              setSorting={setSorting}
            />
          </StyledTop>
          <List
            items={equivalentsOfTheMonth}
            max={equivalentsOfTheMonth[equivalentsOfTheMonth.length - 1]?.value}
          />
          <Bottom category={props.category} />
        </Wrapper>
      </Section.Content>
    </Section>
  )
}
