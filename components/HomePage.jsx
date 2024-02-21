/* eslint-disable @next/next/no-img-element */
import Button from "./Button";

const HomePage = ({ homePage }) => {
  return (
    <div className="w-full px-4 lg:px-10 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold">{homePage.title}</h1>
          <p className="lg:max-w-[500px] lg:text-center">{homePage.content}</p>
          <Button title={homePage.buttonTitle} className="px-5" />
          <img src={homePage.image} alt="homePageVector" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
