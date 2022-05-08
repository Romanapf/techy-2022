import Head from 'next/head'

export const Meta = () =>  {
  return (
    <Head>
        <title>👩🏼‍💻👨🏼‍💻 Techy 2022 </title>
        <meta name="description" content="Techy 2022" />
     
      <link rel="manifest" href="../../../public/favicon.png" />
   
      <link rel="shortcut icon" href='/favicon.svg' />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta property="og:image" content="/rrss.png" />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />


      <meta
        name="description"
        content={'Atida Techy 2022'}
      />
      <meta property="og:image" content={''} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}