import { AccountSettings, StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
import { title } from "process";

export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props}></StackHandler>
}
