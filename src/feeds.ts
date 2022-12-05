import {
  NewFeed as NewFeedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PushEnergy as PushEnergyEvent,
  Received as ReceivedEvent,
  SetAllow as SetAllowEvent
} from "../generated/Feeds/Feeds"
import {
  NewFeed,
  OwnershipTransferred,
  PushEnergy,
  Received,
  SetAllow
} from "../generated/schema"

export function handleNewFeed(event: NewFeedEvent): void {
  let entity = new NewFeed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.author = event.params.author
  entity.feedHash = event.params.feedHash
  entity.parentHash = event.params.parentHash
  entity.feedData = event.params.feedData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePushEnergy(event: PushEnergyEvent): void {
  let entity = new PushEnergy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feedHash = event.params.feedHash
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReceived(event: ReceivedEvent): void {
  let entity = new Received(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetAllow(event: SetAllowEvent): void {
  let entity = new SetAllow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.theHash = event.params.theHash
  entity.isAllow = event.params.isAllow

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
