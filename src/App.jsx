import { Container } from "./components/layout/Container"
import { Header } from "./components/layout/Header"

import send from './assets/send.svg'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import nft1 from './assets/nft1.png'
import nft2 from './assets/nft2.png'
import nft3 from './assets/nft3.png'
import artist1 from './assets/artist1.png'
import artist2 from './assets/artist2.png'
import artist3 from './assets/artist3.png'
import artist4 from './assets/artist4.png'
import artist5 from './assets/artist5.png'
import artist6 from './assets/artist6.png'
import binance from './assets/binance.png'
import trustwallet from './assets/trustwallet.png'
import metamask from './assets/metamask.png'
import coinbase from './assets/coinbase.png'
import tokocrypto from './assets/tokocrypto.png'

import { CardPrimary } from "./components/ui/Cards/CardPrimary"
import { Button } from "./components/ui/Button/Button"
import { ArtistCard } from "./components/ui/Cards/ArtistCard"
import { CardSecondary } from "./components/ui/Cards/CardSecondary"

function App() {
  return (
    <>
      <Header />

      <section className="mt-24">
        <div className="min-h-[568px]">
          <Container>
            <div className="flex items-center w-full gap-6">
                <h1 className="w-3/5 font-bold text-[64px] leading-normal text-center text-white">Discover a New Era of Crypto Currency</h1>
                <div className="w-2/4 flex flex-col justify-between gap-6">
                  <p className="leading-8">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>

                  <a className="flex gap-2 underline text-white font-semibold">
                    Get Started
                    <img src={send}/>
                  </a>
                </div>
            </div>

          </Container>
          <div className="w-[1440px] max-w-[90%] mx-auto mt-14">
            <div className="grid grid-cols-card-top gap-x-6">
              <div>
                <img src={image1}/>
              </div>
              <div>
                <img src={image2}/>
              </div>
              <div>
                <img src={image3}/>
              </div>
            </div>
          </div>
        </div>
        
        <Container>
          <div className="grid grid-cols-5 items-center mt-32 gap-x-10 mx-auto justify-items-center">
            <img src={binance}/>
            <img src={trustwallet}/>
            <img src={metamask}/>
            <img src={coinbase}/>
            <img src={tokocrypto}/>
          </div>
        </Container>
      </section>

      <main className="mt-36">
        <Container>
          <section>
            <h3 className="text-center block font-bold text-5xl text-white">
              Create and sell your <br /> NFTs
            </h3>

            <div className="grid grid-cols-card-primary gap-x-6 mt-14">
              <CardPrimary 
                title="Set up your wallet" 
                desc="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
              />
              <CardPrimary 
                title="Add your NFTs"
                desc="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
              />
              <CardPrimary 
                title="List them for sale"
                desc="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
              />
            </div>
          </section>

          <section className="mt-40">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-5xl text-white">Live Auctions</h3>

              <Button>
                Get Started
              </Button>
            </div>

            <div className="grid grid-cols-card-primary gap-x-6 mt-14">
              <CardSecondary src={nft1}/>
              <CardSecondary src={nft2}/>
              <CardSecondary src={nft3}/>
            </div>
          </section>

          <section className="mt-40">
            <div className="flex items-center justify-between">
              <h3 className="font-bold   text-5xl text-white">Featured Artist</h3>

              <Button>
                Get Started
              </Button>
            </div>

            <div className="grid grid-cols-6 justify-items-center mt-14">
              <ArtistCard src={artist1} name="Crispin Berry"/>
              <ArtistCard src={artist2} name="Wade Warren"/>
              <ArtistCard src={artist3} name="Robert Fox"/>
              <ArtistCard src={artist4} name="Jacob Jones"/>
              <ArtistCard src={artist5} name="Ralph Edwards"/>
              <ArtistCard src={artist6} name="Arlene McCoy"/>
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}

export default App
