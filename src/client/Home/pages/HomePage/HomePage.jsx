import React, {useState, useEffect} from 'react';
import Heading from '../../../../shared/components/Heading';
import Button from '../../../../shared/components/Button';

const HomePage = () => {
    const [tuorList, setTourList] = useState([]);

    useEffect(()=> {
        fetch("../../../../services/tours.json").
            then(response => response.json()).
            then(setTourList)
    }, []);

    return (
        <div>
            <Heading>
                Слайдер
            </Heading>
            <Button>
                Остановить слайдер
            </Button>
        </div>
    );
};

export default HomePage;
