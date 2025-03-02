import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'components/providers/ModalProvider'
import Section from 'components/base/Section'
import Button from 'components/base/Button'
import ButtonLink from 'components/base/ButtonLink'
import MagicLink from 'components/base/MagicLink'

const StyledSection = styled(Section)`
  margin-top: 5rem;
`
const Statistic = styled.h2`
  margin-bottom: 1.375rem;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1;
  text-align: left;

  button {
    text-decoration: none;
  }

  ${(props) => props.theme.mq.medium} {
    font-size: 2rem;
  }
`
const Number = styled.span`
  font-size: 2.25em;
  color: ${(props) => props.theme.colors.main};
`
const Strong = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;

  ${(props) => props.theme.mq.medium}  {
    font-size: 1.125rem;
  }
`
const Title = styled.h2``
const Text = styled.p``
export default function Learning() {
  const { setCo2e } = useContext(ModalContext)

  return (
    <StyledSection>
      <Section.Content>
        <Statistic>
          <Number>2,5%</Number> des émissions de{' '}
          <ButtonLink onClick={() => setCo2e(true)}>
            CO<sub>2</sub>e
          </ButtonLink>
        </Statistic>
        <Strong>
          La{' '}
          <MagicLink to='/empreinte-carbone/numerique/television'>
            production d’une télé
          </MagicLink>{' '}
          émet autant de{' '}
          <ButtonLink onClick={() => setCo2e(true)}>
            CO<sub>2</sub>e
          </ButtonLink>{' '}
          que si vous alliez à Marrakech en avion, soit 350 kg de{' '}
          <ButtonLink onClick={() => setCo2e(true)}>
            CO<sub>2</sub>e
          </ButtonLink>
          .
        </Strong>
        <Text>
          Le <strong>secteur du numérique</strong> est en plein essor. En effet,
          aujourd’hui, les appareils numériques et leurs usages font partie
          intégrante de notre quotidien. Mais saviez-vous que le{' '}
          <strong>numérique</strong> a une empreinte carbone importante et
          représente jusqu’à{' '}
          <strong>
            2,5% des émissions de{' '}
            <ButtonLink onClick={() => setCo2e(true)}>
              CO<sub>2</sub>e
            </ButtonLink>{' '}
            totale en France ?
          </strong>
        </Text>
        <Title>
          Réduire son impact numérique avec des gestes simples, c’est possible ?
        </Title>
        <Text>
          Pour{' '}
          <MagicLink to='https://agirpourlatransition.ademe.fr/particuliers/bureau/bons-gestes/gardons-controle-pratiques-numeriques'>
            réduire notre impact numérique
          </MagicLink>
          , il existe de nombreux gestes à adopter ! Parce que les terminaux
          (ordinateurs, smartphones…) sont à l’origine de l’essentiel des
          impacts (de 65 à 90 %) en particulier pour leur fabrication, vous
          pouvez agir en gardant le plus longtemps possible ces appareils ou en
          privilégiant les <strong>appareils reconditionnés</strong> plutôt que
          neufs. Eteindre vos appareils à la fin de chaque utilisation, limiter
          la très haute définition, faire du{' '}
          <strong>ménage dans votre cloud (photo, vidéo)</strong> comme dans vos
          mails sont d’autres axes pour diminuer votre empreinte numérique.
        </Text>
        <Text>
          Et pour aller plus loin, vous pouvez éteindre votre box internet la
          nuit et pendant vos absences, et surtout, limiter les objets connectés
          et <strong>recycler</strong> vos{' '}
          <strong>anciens équipements informatiques</strong>. En effet, la
          plupart des matériaux contenus dans les{' '}
          <strong>équipements numériques</strong> sont{' '}
          <strong>recyclables</strong> : quand ils ne peuvent pas être réparés,
          vos smartphones par exemple peuvent être en revanche recyclés jusqu’à
          80 % !
        </Text>
        <Title>
          Comment va évoluer l'impact du numérique dans les prochaines années ?
        </Title>
        <Text>
          D’après une{' '}
          <MagicLink to='https://www.arcep.fr/uploads/tx_gspublication/etude-numerique-environnement-ademe-arcep-note-synthese_janv2022.pdf'>
            étude ADEME – ARCEP
          </MagicLink>
          , l’empreinte carbone du numérique pourrait augmenter de manière
          significative si rien n’est fait pour la limiter (+ 60 % d’ici à 2040
          soit 6,7 % de l’empreinte carbone nationale). Quant aux objets
          connectés (comme les{' '}
          <MagicLink to='/empreinte-carbone/numerique/montreconnectee'>
            montres connectées
          </MagicLink>
          ), ils risquent de représenter 18 à 23% de l’empreinte carbone d’ici
          2025, contre 1% en 2020. Limiter son{' '}
          <strong>
            empreinte{' '}
            <ButtonLink onClick={() => setCo2e(true)}>
              CO<sub>2</sub>e
            </ButtonLink>
          </strong>{' '}
          due au <strong>numérique</strong> est donc très important : chaque
          geste compte !
        </Text>

        <Text>
          Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
          calculer l&apos;ensemble de votre empreinte sur le climat grace à
          notre{' '}
          <MagicLink to={'https://nosgestesclimat.fr/'}>
            simulateur Nos Gestes Climat
          </MagicLink>
          <br />
          <br />
        </Text>
        <Button.Wrapper>
          <Button to={'https://nosgestesclimat.fr/'}>
            Découvrir Nos Gestes Climat
          </Button>
        </Button.Wrapper>
      </Section.Content>
    </StyledSection>
  )
}
