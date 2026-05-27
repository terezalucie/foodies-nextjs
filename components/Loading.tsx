import classes from './Loading.module.css'

type LoadingProps = {
    loadingText: string, 
}

export default function Loading({ loadingText }: LoadingProps){
    
    return(
        <p className={classes.loading}>{loadingText}</p>
    )
}