import Concept from './Concept';

const Concepts = props => {
    const tab = props.tabs;
    return (
        <ul id="concepts">
         {tab.map(x => <Concept image={x.image} description={x.description} title={x.title}/>)}
        </ul>
    );
}

export default Concepts;
