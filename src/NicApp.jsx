import Proptypes from 'prop-types';



export const NicApp  = ({title,subTitle,name}) =>{
    //console.log(props);
   
    return (
        <>

        <h1>{title}</h1>

        <p>{subTitle}</p>
        <p>{name}</p>


        </>

    )
    }

    NicApp.propTypes = {
       title: Proptypes.string.isRequired,
       subTitle: Proptypes.string,
    }


    NicApp.defaultProps = {
        title:'no hay titulo',
        subTitle:'no hay subtitulo',
        name: 'Nicolas'
    }