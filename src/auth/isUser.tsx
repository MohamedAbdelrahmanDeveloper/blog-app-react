import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type routeType = {
  condition: boolean;
  redirectTo: string;
  children: React.ReactNode;
}

function ConditionalRoute({condition, redirectTo, children}:routeType): JSX.Element{
  const user = condition;
  const location = useLocation();
  if (!user) {
    return <Navigate to={redirectTo} state={{path: location.pathname}}/>
  }
  return <>{children}</>
}


export default ConditionalRoute