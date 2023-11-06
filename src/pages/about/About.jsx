import Header from "../../components/Header";
import HeaderImage from "../../images/Image1.webp";
import StoryImage from "../../images/Image1.webp";
import VisionImage from "../../images/Image1.jpg";
import MissionImage from "../../images/image.avif";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
        asperiores, in sunt omnis atque minima quibusdam fugit. Omnis, labore.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, atque
              incidunt. Adipisci et fuga excepturi deleniti harum rem quia,
              similique vel nobis est eveniet mollitia neque accusamus, natus
              molestias necessitatibus quidem voluptatem. Hic sapiente quos
              exercitationem, atque quia unde eveniet velit officiis molestias,
              reiciendis doloremque aliquid, officia itaque numquam qui adipisci
              saepe expedita delectus dolores magnam optio sint? Mollitia magni
              sapiente placeat illum molestias consectetur? Error cumque eum
              quasi. Libero odit maiores esse nam facilis? Vero blanditiis
              repudiandae veniam. Consectetur illum ex, voluptates dolore ullam
              aspernatur sint rerum neque voluptatem unde, itaque at aliquam
              mollitia recusandae velit magni repellendus similique!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tempora nam officia recusandae soluta quasi laborum, dicta aliquid
              doloribus culpa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              sapiente?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, atque
              incidunt. Adipisci et fuga excepturi deleniti harum rem quia,
              similique vel nobis est eveniet mollitia neque accusamus, natus
              molestias necessitatibus quidem voluptatem. Hic sapiente quos
              exercitationem, atque quia unde eveniet velit officiis molestias,
              reiciendis doloremque aliquid, officia itaque numquam qui adipisci
              saepe expedita delectus dolores magnam optio sint? Mollitia magni
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tempora nam officia recusandae soluta quasi laborum, dicta aliquid
              doloribus culpa?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, atque
              incidunt. Adipisci et fuga excepturi deleniti harum rem quia,
              similique vel nobis est eveniet mollitia neque accusamus, natus
              molestias necessitatibus quidem voluptatem. Hic sapiente quos
              exercitationem, atque quia unde eveniet velit officiis molestias,
              reiciendis doloremque aliquid, officia itaque numquam qui adipisci
              saepe expedita delectus dolores magnam optio sint? Mollitia magni
              sapiente placeat illum molestias consectetur? Error cumque eum
              quasi. Libero odit maiores esse nam facilis? Vero blanditiis
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tempora nam officia recusandae soluta quasi laborum, dicta aliquid
              doloribus culpa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              sapiente?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
