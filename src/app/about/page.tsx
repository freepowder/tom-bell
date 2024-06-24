import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Markdown from "react-markdown";
import Social from "@/components/ui/social";

const content = `# About Me

![Samantha](/images/about.jpg)

Tomasz Wierzbianski is a documentary filmmaker and director of photography. Originally from Poland, he made London
his new home, where he graduated from Westminster University (Interactive Multimedia MSc) and used this experience
to further his education, shooting indie movies including "Alberto Goes to Rio"(2014), "Lolly in Marseille"
(2015), and "Joyeux Noel!" (2016). He worked with the Oscar-winning art director Tim Yip on his latest movie "Love
Infinity" (2019). He also shot a documentary about the early education system in Finland "Childhood Elsewhere"
(2019) for the Chinese production company Insight Studios HK, directed by Zhou Yijun. The movie was hailed as one
of the best documentaries of 2019 by Chinese Central Television. Being a free spirit at heart and having a great
eye for the cinematography allowed him to make documentaries and business editorials across countries and
continents for the BBC and The Financial Times. In his works, Tom always tries to push the boundaries of
documentary filmmaking to the next level. His personal look on life being an adventure that needs to be embraced
is reflected in his latest film "Ley Da Vida"(2020).

## email 
[tombell@bellotheque.com](tombell@bellotheque.com)
## phone
[07881817844](tel:07881817844)
## social`;


const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
        <Social/>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
