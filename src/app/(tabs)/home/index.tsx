import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome } from "@expo/vector-icons"

import { Logo } from "@components"
import { useState } from "react"
import { Post } from "./types"
import colors from "@constants/colors"

export default () => {
  const [data, setData] = useState<Post[]>([
    {
      postId: 1,
      user: { userId: 1, username: "Tobias da Sinuca" },
      comments: 20,
      likes: 10,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD0CeSshCCzd4JaDmz1vCywvlDD9rpWohBrI6_oIiUA&s",
    },
    {
      postId: 2,
      user: { userId: 1, username: "Pedrito Meriva" },
      comments: 20,
      likes: 10,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvjTYrgAfjJfqJwc3wi0OP_tImvOoXhzNAFpkp5a5wQ&s",
    },
    {
      postId: 3,
      user: { userId: 1, username: "Tobias da Sinuca" },
      comments: 20,
      likes: 10,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD0CeSshCCzd4JaDmz1vCywvlDD9rpWohBrI6_oIiUA&s",
    },
    {
      postId: 4,
      user: { userId: 1, username: "Tobias da Sinuca" },
      comments: 20,
      likes: 10,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD0CeSshCCzd4JaDmz1vCywvlDD9rpWohBrI6_oIiUA&s",
    },
  ])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.mainBackground,
      }}
    >
      <View style={styles.header}>
        <Pressable style={styles.headerIconContainer}>
          <FontAwesome name="bell-o" size={18} color={"#444"} />
        </Pressable>
        <View style={{ width: "50%" }}>
          <Logo />
        </View>
        <Pressable style={styles.headerIconContainer}>
          <FontAwesome name="comments-o" size={18} color={"#444"} />
        </Pressable>
      </View>
      <FlatList
        data={data}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        ListFooterComponent={() => <View style={{ height: 120 }} />}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemProfileContainer}>
              <Image
                style={{ borderRadius: 50, width: 30, height: 30 }}
                src={item.picture}
              />
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.user.username}
              </Text>
            </View>
            <View style={styles.itemImage}>
              <Image style={{ flex: 1 }} src={item?.picture ?? ""} />
              <View style={styles.itemImageFooter}>
                <View style={styles.itemImageRightIcon}>
                  <View style={styles.itemImageLeftIcon}>
                    <FontAwesome name="comment-o" size={18} color={"#fff"} />
                    <Text style={{ color: "#fff" }}>{item.comments}</Text>
                  </View>
                  <View style={styles.itemImageLeftIcon}>
                    <FontAwesome name="heart-o" size={18} color={"#fff"} />
                    <Text style={{ color: "#fff" }}>{item.likes}</Text>
                  </View>
                </View>
                <View style={styles.itemImageRightIcon}>
                  <FontAwesome name="bookmark-o" size={18} color={"#fff"} />
                  <FontAwesome name="send-o" size={18} color={"#fff"} />
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.postId.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    elevation: 2,
  },
  headerIconContainer: {
    backgroundColor: colors.mainForeground,
    padding: 10,
    borderRadius: 50,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: colors.mainForeground,
  },
  item: {
    width: "100%",
    backgroundColor: "#EAE0F8",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 16,
    gap: 10,
  },
  itemProfileContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    gap: 4,
    height: 30,
  },
  itemImage: {
    borderRadius: 30,
    height: 250,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  itemImageFooter: {
    backgroundColor: "#00000077",
    bottom: 0,
    position: "absolute",
    paddingVertical: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  itemImageLeftIcon: { flexDirection: "row", gap: 4 },
  itemImageRightIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
})
