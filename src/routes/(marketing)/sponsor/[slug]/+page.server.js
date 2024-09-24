import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
    const { slug:referralCode } = params;

  // Check the referral code in the database
    
  const { data, error } = await supabase
  .from('users')
  .select('firstName')
  .eq('refID', referralCode)
  .single();

  if(error) {
    return { userName: "Us"}
  }

  return { userName: data.firstName }
}
