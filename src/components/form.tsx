import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export function FormWaitList() {
  return (
    <div>
      <div className="flex w-full flex-col justify-center items-center gap-6 my-4">
        <Tabs defaultValue="account" className="bg-background p-4 rounded-lg">
          <TabsContent value="account">
            <Card className="bg-secondary/10 p-4 rounded-lg border border-primary/20">
              <CardHeader>
                <CardTitle className="text-white py-2 px-4 rounded-lg bg-background font-thin text-center">Join Waitlist</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name" className="text-white">Your Name</Label>
                  <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                    <PersonIcon style={{ color: 'white' }} />
                    <Input id="tabs-demo-name" className="text-white outline-none border-none focus-none" placeholder="Pedro Duarte" />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username" className="text-white">Email</Label>
                  <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                    <EmailIcon style={{ color: 'white' }} />
                    <Input id="tabs-demo-username" className="text-white outline-none border-none focus-none" placeholder="@email" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-black font-normal">Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
