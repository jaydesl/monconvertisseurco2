import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { formatName } from 'utils/formatters'

export default function Seo(props) {
  const router = useRouter()

  const { title, description, image, url } = {
    title: formatName(
      props.title || `Découvrez l'impact sur le climat de votre quotidien`,
      1,
      true
    ),
    description:
      props.description ||
      `Comparez des objets et gestes entre-eux et visualisez facilement leurs émissions de CO2e.`,
    image: `https://monconvertisseurco2.fr/${props.image || 'metaimage.png'}`,
    url: `https://monconvertisseurco2.fr/${router.asPath}`,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={'_datagir'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#2b5797' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}
