import { alpha } from "./alpha"
import { FooCutter } from "../modules/FirstModule/module"

export default function index(){

    console.log("Hello world");
    alpha();

    let fooObj = new FooCutter();
    fooObj.setFoo("Hello foo");

    console.log(fooObj.getFoo());
}

index();