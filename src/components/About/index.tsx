import "@/components/About/About.scss";

const about = () => {
  return (
    <div className="about">
      <img
        className="about__image"
        src="/images/me.jpg"
        alt="Profile Picture"
      />
      <h3>About Me</h3>
      <p>
        Hello there. I am Matthew Simpson, a full stack developer based in
        Vancouver, BC, Canada. After a lifetime of sales and management
        experience I transitioned to full stack development in 2022.
      </p>
      <p>
        Since than I have dived head first into project both personal and
        professional, learning new technologies and skills along the way. Exctly
        the kind of thing that you have ready on a million other portfolio
        sites. It's a cliché, but the thing about clichés is that they come up
        all the time.
      </p>
      <p>
        In my spare time I am also a Rotten Tomatoes approved film and
        television critic and a lifelong trekkie.
      </p>
    </div>
  );
};

export default about;
