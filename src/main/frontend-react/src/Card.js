import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import moment from 'moment'

export default function CardWrapper({data}) {
    return (
        <Card style={{marginBottom: '10px'}}>
            <Grid container>
                <Grid item xs={6}>
                    <CardHeader title={data.title} subheader={moment(data.publishedDate).format('YYYY-MM-DD')}
                                onClick={() => window.open(data.link, '_blank')}
                    />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary' onClick={() => window.open(data.link, '_blank')}
                        >
                            {data.description}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            {data.creator}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        component='img'
                        height='194'
                        image={data.imgUrl}
                        alt='Image'
                        onClick={() => window.open(data.link, '_blank')}
                        style={{minHeight: '100%', cursor: 'pointer'}}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}
