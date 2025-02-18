import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const pollOptions = [
    { id: "1", category: "Thought", text: "Make something unique and stylish", votes: 10 },
    { id: "2", category: "UI/UX priority", text: "Design is intelligence made visible", votes: 20 },
    { id: "3", category: "Design", text: "Everything is designed for you", votes: 30 },
];

export const CustomPoll = () => {
    const [options, setOptions] = useState(pollOptions);
    const [totalVotes, setTotalVotes] = useState(
        pollOptions.reduce((acc, option) => acc + option.votes, 0)
    );

    const handleVote = (id: string) => {
        const updatedOptions = options.map((option) =>
            option.id === id ? { ...option, votes: option.votes + 1 } : option
        );
        setOptions(updatedOptions);
        setTotalVotes(updatedOptions.reduce((acc, option) => acc + option.votes, 0));
    };

    const renderOption = ({ item }: { item: typeof pollOptions[0] }) => {
        const percentage = totalVotes > 0 ? (item.votes / totalVotes) * 100 : 0;

        return (
            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => handleVote(item.id)}
            >
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.text}>{item.text}</Text>
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
                </View>
                <Text style={styles.percentageText}>{percentage.toFixed(1)}%</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pollQuestion}>Which one do you prefer?</Text>
            <FlatList
                data={options}
                keyExtractor={(item) => item.id}
                renderItem={renderOption}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    pollQuestion: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    optionContainer: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginVertical: 6,
    },
    category: {
        fontSize: 14,
        fontWeight: "600",
        color: "#888",
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 5,
    },
    progressBarBackground: {
        height: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        overflow: "hidden",
    },
    progressBarFill: {
        height: "100%",
        backgroundColor: "#00A896",
        borderRadius: 5,
    },
    percentageText: {
        fontSize: 12,
        color: "#666",
        marginTop: 5,
    },
});

