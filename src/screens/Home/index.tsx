import { 
    Container, 
    Title,
 } 
    from './styles';

import { Header } from '../../components/Header';
import { Results } from '../../components/Restults';

export default function Home() {
    return (
        <Container>

            <Header />
            <Results/>

        </Container>
    )
}