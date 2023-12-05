'use client';

import { Lead, LeadMagnet } from "@prisma/client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import other necessary components or variables

interface LeadMagnetsContainerProps {
  leadMagnets: LeadMagnet[];
  leads: Lead[];
}

function LeadMagnetsContainer({
  leadMagnets,
  leads,
}: LeadMagnetsContainerProps) {
  console.log("LeadMagnets from inside the client", leadMagnets);
  console.log("leads from inside the client", leads);

  // define or calculate isMaxFreeLeadMagnet here
  const isMaxFreeLeadMagnet = false; // replace with your logic

  return (
    <div className="p-6 w-full lg:max-w-5xl lg:mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Lead Magnets</h2>
        <Button disabled={isMaxFreeLeadMagnet} variant="default">
          <Link href="/lead-magnet-editor">Create</Link>
        </Button>
      </div>

      {/** TODO Lead Magnets Table */}
    </div>
  );
}

export default LeadMagnetsContainer;
