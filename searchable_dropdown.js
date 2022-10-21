import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
class App extends React.Component{
    render() {
        return (
            <Fragment>
                <SearchableDropdown
                    onItemSelect={(item) => {
                        this.setState({ selectedValue: item.name });
                    }}
                    containerStyle={{ padding: 5 }}
                    onRemoveItem={(item, index) => {
                        const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                        this.setState({ selectedItems: items });
                    }}
                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={items}
                    defaultIndex={2}
                    resetValue={false}
                    textInputProps={
                    {
                        placeholder: "Type to search",
                        backgroundColor: 'white',
                        style: {
                            padding: 12,
                            borderWidth: 1,
                            marginHorizontal: 20,
                            borderColor: '#ccc',
                            borderRadius: 10,
                        },
                        // onTextChange: text => alert(text)
                    }
                    }
                    listProps={
                    {
                        nestedScrollEnabled: true,
                    }
                    }
                />
            </Fragment>
        );
    };
}