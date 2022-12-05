import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { NewFeed } from "../generated/schema"
import { NewFeed as NewFeedEvent } from "../generated/Feeds/Feeds"
import { handleNewFeed } from "../src/feeds"
import { createNewFeedEvent } from "./feeds-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let feedHash = Bytes.fromI32(1234567890)
    let parentHash = Bytes.fromI32(1234567890)
    let feedData = "Example string value"
    let newNewFeedEvent = createNewFeedEvent(
      author,
      feedHash,
      parentHash,
      feedData
    )
    handleNewFeed(newNewFeedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewFeed created and stored", () => {
    assert.entityCount("NewFeed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewFeed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewFeed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feedHash",
      "1234567890"
    )
    assert.fieldEquals(
      "NewFeed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "parentHash",
      "1234567890"
    )
    assert.fieldEquals(
      "NewFeed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feedData",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
