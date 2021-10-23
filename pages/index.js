import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Titantalk</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/350871735387684876/899070704392212490/elefuller.png" />
      </Head>

      <Header />
      <Feed/>
      {/* Feed */}
      {/* Modal */}
    </div>
  )
}
