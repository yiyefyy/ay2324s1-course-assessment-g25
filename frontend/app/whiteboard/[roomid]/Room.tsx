"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "@/components/Loading";
import { RoomProvider } from "@/liveblocks.config";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export function Room(params: { roomid: string; }) {
  const id = params.roomid;
  console.log(id);
  const roomId = useOverrideRoomId(id);

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<Loading />}>
        {() => ""}
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
