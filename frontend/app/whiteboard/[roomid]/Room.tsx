"use client";

import { useParams, useSearchParams } from "next/navigation";

import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "@/components/Loading";
import { RoomProvider } from "@/liveblocks.config";
import { useMemo } from "react";

export function Room(
  { children }: { children: React.ReactNode }
) {
  const params = useParams();
  const roomid: any = params.roomid;
  console.log(roomid);
  // const roomId = useOverrideRoomId(roomid); // useless function - Deon

  return (
    <RoomProvider
      id={roomid}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useOverrideRoomId(roomId: string) {
  const params = useSearchParams();
  const roomIdParam = params.get("roomId");

  const overrideRoomId = useMemo(() => {
    return roomIdParam ? `${roomId}-${roomIdParam}` : roomId;
  }, [roomId, roomIdParam]);

  return overrideRoomId;
}
