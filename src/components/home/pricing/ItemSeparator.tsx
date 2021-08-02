type Props = {
  raised?: boolean
}

const PricingItemSeparator = (props: Props) => {
  return (
    <div
      h="1"
      w="full"
      m="y-0"
      p="y-0"
      bg={props.raised ? 'gradient' : 'gray-200'}
    />
  )
}

export default PricingItemSeparator
