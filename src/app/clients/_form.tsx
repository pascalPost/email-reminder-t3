import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MonthPicker from "@/components/month-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "lucide-react";
import { yearMonthStringFromDate } from "~/lib/utils";
import { clientFormSchema } from "./_schema";

export default function ClientForm() {
  const form = useForm<z.infer<typeof clientFormSchema>>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      lastReminder: new Date(),
      reminderFrequency: "semiannual",
    },
    resolver: zodResolver(clientFormSchema),
  });

  const lastReminder = form.watch("lastReminder");

  function onMonthChange(date: Date) {
    form.setValue("lastReminder", date);
  }

  function onReset() {
    form.reset();
  }

  function onSubmit(values: z.infer<typeof clientFormSchema>) {
    console.log(values);

    // alert(JSON.stringify(values));
    // // form.reset();
    //
    // fetch('http://localhost:3000/client', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(values),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //         form.reset();
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //
    //     })
  }

  return (
    <div className="mx-2 md:container md:mx-auto md:max-w-3xl">
      <Card>
        <CardContent className="pt-4">
          <Form {...form}>
            <form
              onSubmit={() => {
                form.handleSubmit(onSubmit);
              }}
              onReset={onReset}
              id="clientForm"
            >
              <div className="grid grid-cols-2 items-center gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vorname</FormLabel>
                      <FormControl>
                        <Input placeholder="Max" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachname</FormLabel>
                      <FormControl>
                        <Input placeholder="Mustermann" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="col-span-2 flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="max@mustermann.de" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col">
                  <FormField
                    control={form.control}
                    name="lastReminder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Letzte Erinnerung</FormLabel>
                        <FormControl>
                          <div className="relative flex max-w-2xl items-center ">
                            <Input
                              placeholder={yearMonthStringFromDate(new Date())}
                              {...field}
                              value={yearMonthStringFromDate(lastReminder)}
                            />
                            <div className="absolute right-2 top-1.5">
                              <Popover>
                                <PopoverTrigger>
                                  <Calendar />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <MonthPicker
                                    currentMonth={lastReminder}
                                    onMonthChange={onMonthChange}
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 flex flex-col space-y-1.5">
                  <Label htmlFor="frequency">Frequenz</Label>
                  <Select defaultValue="semiannual">
                    <SelectTrigger
                      id="frequency"
                      {...form.register("reminderFrequency")}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="semiannual">Halbjährlich</SelectItem>
                      <SelectItem value="annual">Jährlich</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="mt-2 grid w-full grid-cols-2 gap-4">
          <Button type="reset" form="clientForm" variant="outline">
            Abbrechen
          </Button>
          <Button type="submit" form="clientForm">
            Speichern
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
