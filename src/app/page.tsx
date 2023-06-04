import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        title: 'Keval Mistry',
        description: 'Welcome to The Keval Mistry\'s website',
        images: `${process.env.NEXT_PUBLIC_URL}/KEVAL.jpg`,
        url: `${process.env.NEXT_PUBLIC_URL}`
    }
}

const Home = () => {
    return (
        <>
            {/* <Head>
        <meta property="og:title" content="Keval Mistry" />
        <meta property="og:description" content="Welcome to The Keval Mistry's website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}`} />
      </Head> */}
            <main className="max-w-[1100px] mx-auto text-center py-6">
                <h1 className="font-bold text-[80px]">Hi Everyone</h1>
                <i>
                    <p className="font-thin mt-4 text-[30px]">I hope you all are doing great! My name is Keval Mistry, I am a Software Developer Engineer based of India, working in London.</p>
                </i>
                <div className="flex justify-center mt-6">
                    <img src="/KEVAL.jpg" alt="Keval Mistry" className="max-w-md rounded-2xl" />
                </div>
            </main>
        </>
    )
}

export default Home