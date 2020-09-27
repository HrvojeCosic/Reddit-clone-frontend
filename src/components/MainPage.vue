<template>
  <div class="main">
    <Posts v-bind:postsData="posts" />
  </div>
</template>

<script>
import Posts from "./Posts/Posts";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default {
  components: { Posts },
  data() {
    return {
      posts: [
        {
          title: "Who is the bad guy in history who is not actually a bad guy?",
          community: "AskReddit",
          postedBy: "Elytra__Firm",
          date: moment().format("MMM/YY"),
          upvotes: 5,
          downvotes: 1,
          comments: 12,
          id: uuidv4(),
        },
        {
          title:
            "Research finds that crows know what they know and can ponder the content of their own minds, a manifestation of higher intelligence and analytical thought long believed the sole province of humans and a few other higher mammals.",
          community: "science",
          postedBy: "rustoo",
          date: moment().format("MMM/YY"),
          upvotes: 50,
          downvotes: 12,
          comments: 123,
          id: uuidv4(),
        },
        {
          title: "Dovoljno rečeno",
          community: "serbia",
          postedBy: "korponjaciv1995",
          date: moment().format("MMM/YY"),
          upvotes: 104,
          downvotes: 2,
          comments: 106,
          id: uuidv4(),
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  background-color: #dae0e6;
}
</style>
