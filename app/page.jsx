import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload, FiCoffee } from "react-icons/fi";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer - Apple Reseller</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Quang Dev</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" />
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="flex flex-col xl:flex-row gap-3 justify-center xl:justify-start items-center">
                <a href="/assets/CV_NguyenDuyQuang_JavaDeveloper.pdf" download>
                  <Button
                    variant="outline"
                    size="md"
                    className="uppercase  text-sm flex gap-2 items-center"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <a
                  target="blank"
                  href="https://buymeacoffee.com/nduyquang.01
"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="uppercase text-sm flex gap-2 items-center"
                  >
                    Buy me a coffee
                    <FiCoffee className="text-xl" />
                  </Button>
                </a>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full 
                            flex justify-center items-center text-accent 
                            text-base hover:bg-accent hover:text-primary 
                            hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 xl:mb-0">
            <Photo className="order-1 xl:order-none mb-8 xl:mb-8" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
