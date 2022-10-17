import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import image from '../../../style/img/importing-csv-file-illustrationl.jpg'
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

interface ICard {
    title: string,
    text: string,
    link: string,

}

const CardActionPattern = ({ title, text, link }: ICard) => {

    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate(link)}>
                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardActionPattern