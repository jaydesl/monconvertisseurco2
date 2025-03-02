import React from 'react'

import boisson from 'data/categories/boisson.json'
import deplacement from 'data/categories/deplacement.json'
import electromenager from 'data/categories/electromenager.json'
import habillement from 'data/categories/habillement.json'
import mobilier from 'data/categories/mobilier.json'
import numerique from 'data/categories/numerique.json'
import repas from 'data/categories/repas.json'
import chauffage from 'data/categories/chauffage.json'
import fruitsetlegumes from 'data/categories/fruitsetlegumes.json'
import divers from 'data/categories/divers.json'
import categories from 'data/categories.json'

import Web from 'components/layout/Web'
import Details from 'components/views/equivalent/Details'
import VisualizationSlider from 'components/views/equivalent/VisualizationSlider'
import Ecv from 'components/views/equivalent/Ecv'
import Text from 'components/views/equivalent/Text'

const equivalents = [
  ...boisson,
  ...deplacement,
  ...electromenager,
  ...habillement,
  ...mobilier,
  ...numerique,
  ...repas,
  ...chauffage,
  ...fruitsetlegumes,
  ...divers,
].map((equivalent) => ({ ...equivalent, id: equivalent.slug }))

export default function Equivalent(props) {
  return (
    <Web
      title={props.equivalent.meta.title}
      description={props.equivalent.meta.description}
      breadcrumb={{
        type: 'equivalent',
        category: props.category,
        equivalent: props.equivalent,
      }}
    >
      <Details equivalent={props.equivalent} category={props.category} />
      <VisualizationSlider equivalent={props.equivalent} />
      <Ecv equivalent={props.equivalent} />
      <Text equivalent={props.equivalent} />
    </Web>
  )
}

export async function getStaticPaths() {
  return {
    paths: equivalents.map((equivalent) => ({
      params: {
        equivalent: equivalent.slug,
        category: categories.find(
          (category) => category.id === equivalent.category
        ).slug,
      },
    })),
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  return {
    props: {
      equivalent: equivalents.find(
        (equivalent) => equivalent.slug === params.equivalent
      ),
      category: categories.find(
        (category) => category.slug === params.category
      ),
    },
  }
}
