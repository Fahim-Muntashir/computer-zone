import Company from "../../components/Section/Company";
import Container from "../../components/Shared/Container";
import Banner from "./Banner";

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Company></Company>
        </Container>
    );
};

export default Home;