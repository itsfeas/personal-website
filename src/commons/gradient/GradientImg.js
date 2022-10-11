import gradientImg from './gradient.svg';
import './gradientStyles.css';


const gradientImgStyle = (img) => ({
    WebkitMaskImage: "url(" + img + ")",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",

    maskImage: "url(" + img + ")",
    maskRepeat: "no-repeat",
    maskSize: "100% 100%",

    WebkitMaskBoxImage: "url(" + img + ")",
    maskBoxImage: "url(" + img + ")"
});

function GradientImg({ img, className, ...props }) { 
    return (
        <div className="gradient-image-container">
            <img src={gradientImg} className={`gradientImg ${className}`} style={gradientImgStyle(img)} {...props} />
        </div>
    );
}

function GradientImgUnbordered({ img, className, ...props }) {
    return (
        <div className="gradient-image-container-unbordered">
            <img src={gradientImg} className={`gradientImg ${className}`} style={gradientImgStyle(img)} {...props} />
        </div>
    );
}

export default GradientImg;
export {
    GradientImgUnbordered
};