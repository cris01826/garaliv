import React from "react";
import "./HomeStyles.scss";
import logo from "/src/assets/Logo Garaliv V2.png";
import image1 from "../../assets/envase_1.png";
import image2 from "../../assets/envase_4.png";
import image3 from "../../assets/envase_2.png";
import slider from "../../assets/slider.png";
import info from "../../assets/info.jpg";
import bayas from "../../assets/bayas.jpg";
import { Button, Grid, Input, TextField } from "@mui/material";

const Home = () => {
  return (
    <div className="content">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div
        className="info slider_home"
        style={{ backgroundImage: "url('" + slider + "')" }}
      ></div>
      <div className="info">
        <div
          className="info_popslice"
          style={{ backgroundImage: `url(${info})` }}
        >
          <div className="text_info">
            <p>
              Garaliv es una deliciosa paleta de hielo elaborada con una
              refrescante combinación de sauco y limón. Esta exquisita paleta no
              solo ofrece un sabor único y refrescante, sino que también
              contiene un delicioso relleno de fruto de sauco. El sauco es
              conocido por sus propiedades medicinales, que incluyen ayudar a
              aliviar el dolor, la inflamación y la irritación de la garganta.
              Disfruta de Garaliv y déjate llevar por su sabor refrescante y sus
              beneficios para tu bienestar.
            </p>
          </div>
        </div>
      </div>
      <div className="info">
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <div
                  className="content_image"
                  style={{ backgroundImage: `url(${image1})` }}
                ></div>
              </Grid>
              <Grid item xs={12}>
                <div
                  className="content_image"
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              className="content_image"
              style={{
                backgroundImage: `url(${image3})`,
                height: 700,
                backgroundPosition: "initial",
              }}
            ></div>
          </Grid>
        </Grid>
      </div>

      <div className="info">
        <Grid container>
          <Grid item md={5} xs={12}>
            <div
              className="content_image bayas"
              style={{ backgroundImage: `url(${bayas})` }}
            ></div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className="info_bayas">
              <h4>Sabor y Bienestar en Cada Bocado</h4>
              <p>
                Sumérgete en una experiencia de sabor sublime con nuestro
                relleno de fruto de sauco. Cada bocado está repleto de la
                frescura y dulzura natural de este delicioso fruto, ofreciendo
                una explosión de sabores que deleitarán tu paladar. Además de su
                exquisito sabor, el fruto de sauco es conocido por sus numerosos
                beneficios para la salud. Rico en antioxidantes y compuestos
                antiinflamatorios, este superalimento puede ayudar a fortalecer
                tu sistema inmunológico y a combatir la inflamación. Disfruta de
                lo mejor de ambos mundos: un placer para tus sentidos y un
                impulso para tu bienestar con nuestro irresistible relleno de
                fruto de sauco.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="info">
        <div className="contact">
          <h2>Contactanos</h2>
          <TextField
            className="input"
            type="text"
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
          />
          <TextField
            className="input"
            type="text"
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
          />
          <TextField
            className="input"
            type="email"
            id="outlined-basic"
            label="Correo electronico"
            variant="outlined"
          />
          <TextField
          rows={4}
            className="input"
            type="text"
            id="outlined-basic"
            label="Mensaje"
            multiline
            variant="outlined"
          />

          <Button className="button" variant="outlined" >Enviar</Button>
        </div>
      </div>
  
      
    </div>
  );
};

export default Home;
