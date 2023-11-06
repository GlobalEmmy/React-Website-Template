import Header from "../../components/Header"
import HeaderImage from "../../images/Image2.jpg"
import "./gallery.css"

const Gallery = () => {
  const galleryLength = 4;
  const images = []
  for(let i =2; i <= galleryLength; i++){
    images.push(require(`../../images/Image${i}.jpg`))
    console.log(images)
  }
  return (
  
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
        asperiores, in sunt omnis atque minima quibusdam fugit. Omnis, labore.
    </Header>
   <section className="gallery">
    <div className="container gallery__container">
      {
        images.map((image, index) => {
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </article>
        })
      }
    </div>
   </section>
    </>
  )
}

export default Gallery
