import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
function InfoBox({info}) {
    const image_URL='https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const Hot_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhFwdExCkwHb5oVxsxMqRv8vxF7C0Jw5pSQ&s";
    const Cold_URL="https://plus.unsplash.com/premium_photo-1667752591799-7c4d3ab52b38?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rainy_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
  return (
<div className='InfoBox'>
     <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            sx={{ height: 140 }}
            image={
                info.humidity>80 ?
                Rainy_URL:info.temp>20 ?
                Hot_URL:Cold_URL}
        />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                     <p>Temperature={info.temp}&deg;C</p>
                     <p>Humidity={info.humidity}</p>
                     <p>Min Temp={info.tempMin}</p>
                     <p>Max Temp={info.tempMax}</p>
                     <p>The weather can be described as <i>{info.weather}</i> & feels like={info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
    </div>
   
</div>
  )
}

export default InfoBox;
