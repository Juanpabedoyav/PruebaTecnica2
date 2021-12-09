import styled from 'styled-components'

export const MainStyle = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center ;
    flex-wrap: wrap;
    width: 100%;
    /* height: 100%; */
.card{
        margin-top: 50px;
        /* border: 1px solid black; */
        width: 250px;
        
        /* height: 200px; */
        .img{
        /* border:1px solid red; */
        text-align: center;
        }
.info{
        /* border: 1px solid green; */
        height: 50px;
                    margin: 20px 0;

        text-align:center;
        .name-producto {
            font-size: 1rem;
        }
        .price-producto {
            font-size: 1.2rem;
        }
}

    }
    .comprar{
    width:80%;
    background-color: black;
    color: white;
        font-weight: 800;
        height: 30px;
    display:block;
    margin: 0 auto;
    margin-bottom: 20px;
}

`

export const StyleFiltros = styled.div`
    
    /* border: 1px solid red; */
    width: 350px;
    button{
        background-color: black;
    color: white;
        font-weight: 800;
    }

`