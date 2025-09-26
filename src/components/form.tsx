import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { supabase } from '../lib/supabaseClient';
import { toast } from "sonner"

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  try {
    // Check if email already exists
    const { data: existing, error: selectError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .maybeSingle();
    if (selectError) {
      setError('Error checking email. Please try again.');
      setLoading(false);
      return;
    }
    if (existing) {
      setError('This email is already on the waitlist.');
      toast.error('This email is already on the waitlist.');
      setLoading(false);
      return;
    }
    // Insert if not exists
    const { error } = await supabase.from('waitlist').insert([{ name, email }]);
    if (error) {
      setError('Failed to join waitlist. Please try again.');
      console.error(error);
    } else {
      toast.success("You have joined the waitlist!");
      setName('');
      setEmail('');
    }
  } catch (err) {
    setError('Something went wrong.');
    console.error(err);
  }
  setLoading(false);
 };

  return (
    <div>
      <div className="flex w-full flex-col justify-center items-center gap-6 my-4">
        <Tabs defaultValue="account" className="bg-background p-4 rounded-lg">
          <TabsContent value="account">
            <form onSubmit={handleSubmit}>
              <Card className="bg-secondary/10 p-4 rounded-lg border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white py-2 px-4 rounded-lg bg-background font-thin text-center">Join Waitlist</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-name" className="text-white">Your Name</Label>
                    <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                      <PersonIcon style={{ color: 'white' }} />
                      <Input
                        id="tabs-demo-name"
                        className="text-white outline-none border-none focus-none"
                        placeholder="Pedro Duarte"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-username" className="text-white">Email</Label>
                    <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-2">
                      <EmailIcon style={{ color: 'white' }} />
                      <Input
                        id="tabs-demo-username"
                        className="text-white outline-none border-none focus-none"
                        placeholder="@email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  {success && <div className="text-green-400 text-sm">{success}</div>}
                  {error && <div className="text-red-400 text-sm">{error}</div>}
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-black font-normal" type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save changes'}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
