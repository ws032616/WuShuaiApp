// @flow
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { List, ListHeader, Item, H2, Divider } from 'react-native-sinoui';

type NotionListPropsType = {
  notionList: any,
  orderBy: string,
};

const headerTextColor = 'rgba(0,0,0,0.54)';
const styles = StyleSheet.create({
  notionList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  headerText: {
    color: headerTextColor,
  },
});

export function handleNotionList(value?: string, item: any) {
  if (value === 'time') {
    return item.sort(function(a, b) {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  }
  const _notionList = item.sort(function(a, b) {
    return a.sort - b.sort;
  });
  const map = {},
    data = [];
  for (let i = 0; i < _notionList.length; i++) {
    const ai = _notionList[i];
    if (!map[ai.ideaFieldTitle]) {
      data.push({
        ideaFieldTitle: ai.ideaFieldTitle,
        data: [ai],
      });
      map[ai.ideaFieldTitle] = ai;
    } else {
      for (let j = 0; j < data.length; j++) {
        const dj = data[j];
        if (dj.ideaFieldTitle == ai.ideaFieldTitle) {
          dj.data.push(ai);
          break;
        }
      }
    }
  }
  return data;
}

export default function NotionList(props: NotionListPropsType) {
  const { notionList } = props;
  const renderContent = () => {
    if (notionList.length < 1) {
      return <Text>暂无意见</Text>;
    } else if (props.orderBy === 'time') {
      const notionListOrderByTime = handleNotionList(props.orderBy, notionList);
      return (
        <List>
          {notionListOrderByTime.map((item: any, i) => {
            return (
              <Item noLines key={i}>
                <H2>
                  办理人：{`${item.userName}/${item.deptName}`}
                </H2>
                <H2>
                  办理时间：{item.dateStr}
                </H2>
                <H2>
                  办理意见：{item.content === 'TRUE' ? '无' : item.content}
                </H2>
              </Item>
            );
          })}
        </List>
      );
    } else {
      const notionListOrderByNode = handleNotionList('', notionList);
      return (
        <List>
          {notionListOrderByNode.map((item, i) => {
            return (
              <View key={i}>
                <ListHeader
                  containerStyle={styles.header}
                  style={styles.headerText}
                >
                  {`《${item.ideaFieldTitle}》`}
                </ListHeader>
                {item.data
                  .sort(function(a, b) {
                    return Date.parse(b.date) - Date.parse(a.date);
                  })
                  .map((option, i) => {
                    return (
                      <Item noLines key={i}>
                        <H2>
                          办理人：{`${option.userName}/${option.deptName}`}
                        </H2>
                        <H2>
                          办理时间：{option.dateStr}
                        </H2>
                        <H2>
                          办理意见：{option.content === 'TRUE'
                            ? '无'
                            : option.content}
                        </H2>
                      </Item>
                    );
                  })}
                {i !== notionListOrderByNode.length - 1 && <Divider />}
              </View>
            );
          })}
        </List>
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[props.notionList.length < 1 && styles.notionList]}
    >
      {renderContent()}
    </ScrollView>
  );
}
