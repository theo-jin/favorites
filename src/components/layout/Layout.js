import classes from './Layout.module.css';
import MainNavigatiion from './MainNavigation';


function Layout (props){
  return(
  <div>
    <MainNavigatiion/>
    <main className={classes.main}>{props.children}</main>
  </div>
  )
}


export default Layout