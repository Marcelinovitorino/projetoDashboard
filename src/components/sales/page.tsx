import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
  return (
    <Card className="flex-1 mt-5">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>



      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/Marcelinovitorino.png"
              className="w-full h-full rounded-full object-cover"
            />
            <AvatarFallback>MV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-700">Marcelino Vitorino</p>
            <p className="text-xs text-gray-500">marcelinovitorinomanguele00@gmail.com</p>
          </div>
        </article>
                <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/Marcelinovitorin.png"
              className="w-full h-full rounded-full object-cover"
            />
            <AvatarFallback>MV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-gray-700">Marcelino Vitorino</p>
            <p className="text-xs text-gray-500">marcelinovitorinomangele@gmail.com</p>
          </div>
        </article>
        <div>
            <p className="text-sm sm:text-base font-semibold"></p>
            <span className="text-[12px] sm:text-sm"></span>
        </div>
      </CardContent>

    </Card>
  );
}
