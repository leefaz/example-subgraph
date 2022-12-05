import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  NewFeed,
  OwnershipTransferred,
  PushEnergy,
  Received,
  SetAllow
} from "../generated/Feeds/Feeds"

export function createNewFeedEvent(
  author: Address,
  feedHash: Bytes,
  parentHash: Bytes,
  feedData: string
): NewFeed {
  let newFeedEvent = changetype<NewFeed>(newMockEvent())

  newFeedEvent.parameters = new Array()

  newFeedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  newFeedEvent.parameters.push(
    new ethereum.EventParam("feedHash", ethereum.Value.fromFixedBytes(feedHash))
  )
  newFeedEvent.parameters.push(
    new ethereum.EventParam(
      "parentHash",
      ethereum.Value.fromFixedBytes(parentHash)
    )
  )
  newFeedEvent.parameters.push(
    new ethereum.EventParam("feedData", ethereum.Value.fromString(feedData))
  )

  return newFeedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPushEnergyEvent(
  feedHash: Bytes,
  amount: BigInt
): PushEnergy {
  let pushEnergyEvent = changetype<PushEnergy>(newMockEvent())

  pushEnergyEvent.parameters = new Array()

  pushEnergyEvent.parameters.push(
    new ethereum.EventParam("feedHash", ethereum.Value.fromFixedBytes(feedHash))
  )
  pushEnergyEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return pushEnergyEvent
}

export function createReceivedEvent(sender: Address, amount: BigInt): Received {
  let receivedEvent = changetype<Received>(newMockEvent())

  receivedEvent.parameters = new Array()

  receivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  receivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return receivedEvent
}

export function createSetAllowEvent(
  theHash: Bytes,
  isAllow: boolean
): SetAllow {
  let setAllowEvent = changetype<SetAllow>(newMockEvent())

  setAllowEvent.parameters = new Array()

  setAllowEvent.parameters.push(
    new ethereum.EventParam("theHash", ethereum.Value.fromFixedBytes(theHash))
  )
  setAllowEvent.parameters.push(
    new ethereum.EventParam("isAllow", ethereum.Value.fromBoolean(isAllow))
  )

  return setAllowEvent
}
