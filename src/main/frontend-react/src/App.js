import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import moment from 'moment'


import CardWrapper from './Card';

export default function App() {
    const [data, setData] = useState([]);
    const [language, selectLanguage] = useState('en')

    useEffect(() => getData(), []);

    const getData = () => {
        axios
            .get('http://localhost:8080/api/rss/nyt')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <AppBar component="div" position="sticky">
                <Toolbar className={'toolbar'}>
                    <Typography variant='body2' color='text.secondary'>
                        {moment().format('YYYY-MM-DD')}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <img height="30vw" src="nytimes-logo.png" alt=""/>
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <span className={language === 'en' ? 'isActive' : 'isNotActive'}
                              onClick={() => selectLanguage('en')}>ENG</span>/
                        <span className={language === 'es' ? 'isActive' : 'isNotActive'}
                              onClick={() => selectLanguage('es')}>ESP</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{
                padding: '100px', background: '#cfd1d0'
            }}>
                {data.map((d) => {
                    return <CardWrapper data={d} key={d.link}/>;
                })}
            </div>
        </>
    )
}
