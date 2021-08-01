import heroImage from './hero.png'

const HeroImage = () => {
  return (
    <div w="full md:3/5" p="y-6" text="center">
      <img w="full md:4/5" z="50" src={heroImage} />
    </div>
  )
}

export default HeroImage
