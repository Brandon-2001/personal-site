import SimpleParallax from 'simple-parallax-js'

const Trees = () => (
  <SimpleParallax delay={1.5} orientation={"left"} scale={4} overflow>
    <img className={"trees"} src={"./src/assets/trees.svg"} alt={"image"} />
  </SimpleParallax>
);

const Sun = () => (
  <SimpleParallax delay={2} orientation={"right"} scale={10} overflow>
    <img className={"sun"} src={"./src/assets/sun.svg"} alt={"image"} />
  </SimpleParallax>
);

const Cloud1 = () => (
  <SimpleParallax delay={1} orientation={"right"} scale={20} overflow>
    <img className={"cloud-1"} src={"./src/assets/cloud-1.svg"} alt={"image"} />
  </SimpleParallax>
);
const Cloud2 = () => (
  <SimpleParallax delay={2} orientation={"left"} scale={10} overflow>
    <img className={"cloud-2"} src={"./src/assets/cloud-2.svg"} alt={"image"} />
  </SimpleParallax>
);
            
export {Trees, Sun, Cloud1, Cloud2}