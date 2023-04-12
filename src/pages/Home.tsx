import React from 'react'
import { Banner} from '../components/Banner'
import { Container, Icon, Card } from '../components/Icones'
import { Title, Text} from '../components/Title-Text'
import CheckedSvg from '../assets/checked.svg'
import MonitorSvg from '../assets/monitor.svg'
import SquaresSvg from '../assets/squares.svg'
import { ContentSection, DivImg, DivText, Row } from '../components/Conteúdo'
import { Footer, Links, ListLinks, MediaLinks,  } from '../components/Footer'

export const Home: React.FC = () =>{
    return(
        <>
            <header>
                <Banner height='60vh' fontSize='36px'>
                    <h1>Título da página</h1>
                </Banner>
            </header>
            <main>
                <Container>
                    <Card>
                        <Icon src={MonitorSvg} alt='Icone de Monitor'/>
                        <Title>Somente para Desktop</Title>
                        <Text>lorem</Text>
                    </Card>
                    <Card>
                        <Icon src={SquaresSvg} alt='Quadrados de components'/>
                        <Title>Components</Title>
                        <Text>lorem</Text>
                    </Card>
                    <Card>
                        <Icon src={CheckedSvg} alt='Simbolo de Checked'/>
                        <Title>Components</Title>
                        <Text>lorem</Text>
                    </Card>
                </Container>
                <ContentSection>
                    <Row>
                        <DivText>
                            <Title>Lorem</Title>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo architecto dicta accusamus voluptatem eaque, magnam velit suscipit, quisquam esse unde autem assumenda facilis incidunt deserunt repellendus non iure est?
                            Facere doloremque pariatur voluptatibus voluptas voluptatem fugiat provident porro, nisi mollitia quidem, ad aliquid reprehenderit consequatur similique saepe illo dolorem minima debitis laudantium, consequuntur rem? Voluptate nesciunt sed quae unde.
                            Nostrum at alias culpa aperiam a, adipisci inventore ratione magni neque voluptatem. Asperiores, voluptatibus nesciunt illo dicta cum aliquid eius repellat dolorem repellendus ut excepturi cumque? Possimus laborum commodi ad?
                            Minima sint aliquam deleniti quaerat facilis voluptatibus quasi consequuntur cum dignissimos reiciendis quia, suscipit ipsa, rerum natus quidem quibusdam repellendus, numquam laborum? Rerum ipsum amet commodi </Text>
                        </DivText>
                        <DivImg src='https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                        </DivImg>
                    </Row>
                    <Row reverse={true}>
                        <DivText>
                            <Title>Lorem</Title>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo architecto dicta accusamus voluptatem eaque, magnam velit suscipit, quisquam esse unde autem assumenda facilis incidunt deserunt repellendus non iure est?
                            Facere doloremque pariatur voluptatibus voluptas voluptatem fugiat provident porro, nisi mollitia quidem, ad aliquid reprehenderit consequatur similique saepe illo dolorem minima debitis laudantium, consequuntur rem? Voluptate nesciunt sed quae unde.
                            Nostrum at alias culpa aperiam a, adipisci inventore ratione magni neque voluptatem. Asperiores, voluptatibus nesciunt illo dicta cum aliquid eius repellat dolorem repellendus ut excepturi cumque? Possimus laborum commodi ad?
                            Minima sint aliquam deleniti quaerat facilis voluptatibus quasi consequuntur cum dignissimos reiciendis quia, suscipit ipsa, rerum natus quidem quibusdam repellendus, numquam laborum? Rerum ipsum amet commodi </Text>
                        </DivText>
                        <DivImg src='https://images.pexels.com/photos/1145274/pexels-photo-1145274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                        </DivImg>
                    </Row>
                    <Row>
                        <DivText>
                            <Title>Lorem</Title>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo architecto dicta accusamus voluptatem eaque, magnam velit suscipit, quisquam esse unde autem assumenda facilis incidunt deserunt repellendus non iure est?
                            Facere doloremque pariatur voluptatibus voluptas voluptatem fugiat provident porro, nisi mollitia quidem, ad aliquid reprehenderit consequatur similique saepe illo dolorem minima debitis laudantium, consequuntur rem? Voluptate nesciunt sed quae unde.
                            Nostrum at alias culpa aperiam a, adipisci inventore ratione magni neque voluptatem. Asperiores, voluptatibus nesciunt illo dicta cum aliquid eius repellat dolorem repellendus ut excepturi cumque? Possimus laborum commodi ad?
                            Minima sint aliquam deleniti quaerat facilis voluptatibus quasi consequuntur cum dignissimos reiciendis quia, suscipit ipsa, rerum natus quidem quibusdam repellendus, numquam laborum? Rerum ipsum amet commodi </Text>
                        </DivText>
                        <DivImg src='https://images.pexels.com/photos/60090/pexels-photo-60090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
                        </DivImg>
                    </Row>


                </ContentSection>
               <Banner fontSize='20px' height='30vh'>
                    <h2>Contatos</h2>
               </Banner>
            </main>
            <Footer>
                <Links>
                    <ListLinks>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    </ListLinks>
                    <small>
                        @ Meu primeiro site 2023. todos os direitos reservados.
                    </small>
                </Links>
                <MediaLinks>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="Facebook Icon" /></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494488.png" alt="Instagram Icon" /></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494494.png" alt="Whatsapp Icon" /></li>
                </MediaLinks>
            </Footer>
        </>
    )
}