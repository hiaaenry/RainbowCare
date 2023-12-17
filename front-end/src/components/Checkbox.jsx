import { Checkbox, Typography } from "@material-tailwind/react";
import { useState } from "react";
 
export default function CheckboxLink({ checked, onChange }) {
  return (
    <Checkbox href="tutorial-admin"
      checked={checked}
      onChange={onChange}
      label={
        <Typography color="blue-gray" className="flex ml-3 font-medium">
            Eu concordo com o          
        <Typography
            as="a"
            href="#"
            color="blue"
            className="font-medium transition-colors hover:text-blue-700"
          >
            &nbsp;"Termo de Compromisso"
          </Typography>
          .
        </Typography>
      }
    />
  );
}