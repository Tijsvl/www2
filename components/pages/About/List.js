import classes from './List.module.scss';

const List = () => {
  return (
    <section className={classes.list}>
      <div>
        <h3>My Skills</h3>

        <h4>Creative</h4>
        <ul>
          <li>Photography</li>
          <li>Videography</li>
          <li>Post Processing</li>
          <li>Graphic Design</li>
        </ul>

        <h4>Web</h4>
        <ul>
          <li>Front End Development</li>
          <li>JavaScript</li>
          <li>React/Next.js</li>
          <li>MongoDB/Firebase</li>
          <li>CSS</li>
          <li>SCSS/SASS</li>
          <li>HTML5/PUG</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>

        <h4>Software</h4>
        <ul>
          <li>Visual Studio Code</li>
          <li>Adobe Creative Suite</li>
          <li>DaVinci Resolve</li>
          <li>Cinema 4D</li>
        </ul>

        <h4>Life</h4>
        <ul>
          <li>Active runner</li>
          <li>Football player</li>
          <li>Hiker</li>
          <li>Swimmer</li>
          <li>Terrible dancer</li>
        </ul>
      </div>

      <div>
        <h3>MY GEAR</h3>
        <ul>
          <li className={classes.head}>Canon EOS 5D Mark III</li>
          <li className={classes.head}>Canon EOS 5D Mark IV</li>
          <li>Samyang 12mm f/2.8 ED AS NCS Fish-eye</li>
          <li>Canon EF 16-35mm f/2.8L II USM</li>
          <li>Canon EF 50mm f/1.8 STM</li>
          <li>Canon EF 24-105mm f/3.5-5.6 IS STM</li>
          <li>Canon EF 135mm f/2.0 L USM</li>
          <li className={classes.head}>Olympus OM20</li>
          <li>Ozeck 28mm f/2.8 797141</li>
          <li>Zuiko 75-150mm f/4 138160</li>
          <li className={classes.head}>GoPro Hero 8 Black</li>
          <li className={classes.head}>DJI Phantom Pro 4</li>
        </ul>

        <h3>Retired Gear</h3>
        <ul>
          <li className={classes.head}>Nikon D800</li>
          <li>Nikon 24-120mm f/3.5-5.6G ED-IF AF-S VR NIKKOR</li>
          <li>Sigma 135-400mm f4.5-5.6 DG APO Aspherical</li>
          <li className={classes.head}>Canon EOS 60D</li>
          <li>Canon EF-S 18-55mm f/3.5-5.6 IS STM</li>
          <li>Canon EF-S 55-250mm f/4-5.6 IS STM</li>
          <li className={classes.head}>GoPro Hero 5 Black</li>
          <li className={classes.head}>GoPro Hero 3 Black</li>
          <li className={classes.head}>GoPro Hero 3 Black</li>
          <li className={classes.head}>GoPro Hero 2</li>
        </ul>
      </div>
    </section>
  );
};

export default List;
