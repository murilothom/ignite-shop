import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 8,
  width: '8rem',
  height: '8rem',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>
        <span>Teste</span>
        Botão
      </Button>
    </div>
  )
}
